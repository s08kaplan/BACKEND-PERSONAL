"use strict"

module.exports = (req, res, next) => {
  const { filter, search, sort, page, limit,skip } = req.query
// ! FILTER
 filter = filter || {}

// ! SEARCH
search = search || {}
for(let key in search) {
    search[key] = { $regex: search[key], $options:"i"}
}

// ! SORT
sort = sort || {}

// ! PAGINATION
// ! 1) Limit

limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20)

// ! 2)Page
page = Number(page)

page = page > 0 ? (page - 1) : 0

// ! 3)Skip
skip = Number(skip)
skip = skip > 0 ? skip : (page * limit)

// ! Dynamic Purpose for models to use in controller file
res.getModelList = async (Model, populate = null) => {
    return await Model.find({...filter, ...search }).sort(sort).skip(skip).limit(limit).populate(populate)
}

// !Details

res.getModelListDetails = async (Model) => {
  const data = await Model.find({ ...filter, ...search })

  let details = {
    filter, search, sort, skip, limit, page, 
    pages: {
        previous: (page > 0 ? page : false),
        current_page: page + 1,
        next_page: page + 2,
        total_page: Math.ceil(data.length / limit)
},
   totalRecords: data.length,
  }
  details.pages.next_page = (details.pages.next_page > details.pages.total_page ? false : details.pages.next_page )
  if ( details.totalRecords <= limit) details.pages = false
  return details
}

next()

}