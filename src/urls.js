/**
 *
 * @Author VOID SOFTWARE <info@void.pt>
 * @Copyright 2019-2020 VOID SOFTWARE, S.A.
 *
 */

const API_URL = 'https://my.sweezi.pt/api';

export const requestTokenURL = () => {
    return `${API_URL}/authentication/request-token`;
};

export const ordersURL = (storeId, search, sort, order, startIndex, maxResults) => {
    let queryString = `?_start=${startIndex}&_limit=${maxResults}`;
    queryString += search ? `&_q=${search}` : '';
    queryString += sort ? `&_sort=${sort}&_order=${order}` : '';
    return `${API_URL}/stores/${storeId}/orders${queryString}`;
};

export const createOrderURL = storeId => {
    return `${API_URL}/stores/${storeId}/orders`;
};

export const sweeziOrdersURL = (storeId, customerOrderId) => {
    let queryString = customerOrderId ? `?_corder=${customerOrderId}&_sort=id` : '';
    return `${API_URL}/stores/${storeId}/sweezi-orders${queryString}`;
};

export const orderURL = (storeId, orderId) => {
    return `${API_URL}/stores/${storeId}/orders/${orderId}`;
};

export const editOrderURL = (storeId, orderId) => {
    return `${API_URL}/stores/${storeId}/orders/${orderId}`;
};

export const countriesURL = () => {
    return `${API_URL}/countries`;
};

export const storesURL = () => {
    return `${API_URL}/stores`;
};

export const storeURL = (storeId) => {
    return `${API_URL}/stores/${storeId}`;
};

export const servicesURL = (planId) => {
    return `${API_URL}/plans/${planId}/services`;
};

export const trackingOrdersURL = (storeId, orderId) => {
  return `${API_URL}/stores/${storeId}/orders/${orderId}/tracking`;
};

export const trackingURL = (trackingNumber) => {
    return `${API_URL}/tracking/${trackingNumber}`;
};

export const sweeziSpotsURL = (countryCode, postalCode) => {
    return `${API_URL}/pick-me/${countryCode}/${postalCode}`;
};