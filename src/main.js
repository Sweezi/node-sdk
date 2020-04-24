/**
 *
 * @Author VOID SOFTWARE <info@void.pt>
 * @Copyright 2019-2020 VOID SOFTWARE, S.A.
 *
 */

import axios from 'axios';

import {
    countriesURL,
    createOrderURL,
    editOrderURL,
    ordersURL,
    orderURL,
    requestTokenURL,
    servicesURL,
    storesURL,
    storeURL,
    sweeziOrdersURL,
    trackingURL,
    trackingOrdersURL,
    sweeziSpotsURL,
} from './urls';

let token = null;
let tokenExpDate = null;

const getRequestConfig = (token, selectedPage, isMultipart = false) => {
    if (isMultipart) {
        return {
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data',
            },
        };
    }

    if (!selectedPage) {
        return {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
    }

    return {
        headers: {
            authorization: `Bearer ${token}`,
            'selected-page': selectedPage,
        },
    };
};

const requestToken = async (clientId, clientSecret) => {
    try {
        const res = await axios.post(requestTokenURL(), {
            clientId: clientId,
            secret: clientSecret,
        });

        token = res.data.token;
        tokenExpDate = res.data.expireDate;
    } catch (error) {
        return error;
    }
};

const checkTokenExpired = () => {
    const now = Date.now();
    return now > tokenExpDate || now + 5000 > tokenExpDate;
};

export default class SweeziSDK {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    async getAllOrders(storeId, search = '', sort = 'id', order = 'asc', startIndex = 0, maxResults = 20) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {

            const res = await axios.get(ordersURL(storeId, search, sort, order, startIndex, maxResults), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getOrder(storeId, orderId) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {

            const res = await axios.get(orderURL(storeId, orderId), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async createOrder(storeId, order) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.post(createOrderURL(storeId), order, getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async updateOrder(storeId, orderId, order) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.put(editOrderURL(storeId, orderId), order, getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getCountries() {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(countriesURL(), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getServices(planId) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(servicesURL(planId), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getMyStores() {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(storesURL(), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getMyStoreAddress(storeId) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(storeURL(storeId), getRequestConfig(token));

            const { data } = res;

            return data.address;
        } catch (error) {
            return error;
        }
    }

    async getMySweeziOrders(storeId, id) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(sweeziOrdersURL(storeId, id), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getMySweeziOrderTracking(storeId, id) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(trackingOrdersURL(storeId, id), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getTracking(trackingNumber) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(trackingURL(trackingNumber));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

    async getSweeziSpots(countryCode, postalCode) {
        if (token === null || checkTokenExpired()) await requestToken(this.clientId, this.clientSecret);
        try {
            const res = await axios.get(sweeziSpotsURL(countryCode, postalCode), getRequestConfig(token));

            const { data } = res;

            return data;
        } catch (error) {
            return error;
        }
    }

}


export class Order {
    constructor(contactName, email, serviceId, receiverAddress, shipperAddress, items) {
        this.contactName = contactName;
        this.email = email;
        this.items = items;
        this.receiverAddress = receiverAddress;
        this.serviceId = serviceId;
        this.shipperAddress = shipperAddress;
    }
}

export class Item {
    constructor(description, height, length, quantity, weight, width) {
        this.description = description;
        this.height = height;
        this.length = length;
        this.quantity = quantity;
        this.weight = weight;
        this.width = width;
    }
}

export class Address {
    constructor(city, countryId, postalCode, state, street, street2) {
        this.city = city;
        this.countryId = countryId;
        this.postalCode = postalCode;
        this.state = state;
        this.street = street;
        this.street2 = street2;
    }
}
