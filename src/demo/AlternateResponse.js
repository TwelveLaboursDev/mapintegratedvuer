/* eslint-disable no-alert, no-console */
const searchDataset = async (payload, callback) => {
  let search = "";
  let allFilter = {};
  let data = {};

  if (payload.query) {
    search = payload.query;
  }
  if (payload.filters !== undefined) {
    for (let i = 0; i < payload.filters.length; i++) {
      let filter = payload.filters[i];
      if (filter.facet != "Show all") {
        if (filter.facetPropPath in allFilter) {
          allFilter[filter.facetPropPath].push(filter.facet);
        } else {
          allFilter[filter.facetPropPath] = [filter.facet];
        }
      }
    }
  }
  let postPayload = {
    filter: allFilter,
    limit: payload.numberPerPage,
    page: payload.page,
  };
  let url = `${payload.queryUrl}/graphql/pagination/?search=${search}`;
  await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      Authorization: "Bearer undefined",
    },
    body: JSON.stringify(postPayload), // body data type must match "Content-Type" header
    Cache: "default",
  })
    .then((response) => response.json())
    .then((json) => (data = json));

  const searchData = data;
  callback(searchData);
};

const getFacets = async (payload, callback) => {
  let facet = {};
  let url = `${payload.queryUrl}/filter/?sidebar=true`;
  await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      Authorization: "Bearer undefined",
    },
    Cache: "default",
  })
    .then((response) => response.json())
    .then((json) => (facet = json));
  const facets = facet;
  const returnedPayload = {
    data: facets,
  };
  callback(returnedPayload);
};

export const mySearch = (payload, callback) => {
  if (payload && callback) {
    if (payload.requestType == "Search") {
      searchDataset(payload, callback);
      return;
    } else if (payload.requestType == "getFacets") {
      getFacets(payload, callback);
    }
  }
};