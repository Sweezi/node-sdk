# SDK MySweezi
This package allows integration of clients applications with the MySweezi API.

## Install
```
npm install sweezi-sdk
```

## Getting started

```
const { default: SweeziSDK } = require('sweezi-sdk');

const sdk = new SweeziSDK(clientId, secret);
```
The `clientId` and `secret` are the credentials used to authenticated the application using a token registered.

## Examples
- Request all stores
```
await sdk.getMyStores();
```

- Creating an order
```
const { default: SweeziSDK, Order } = require('sweezi-sdk');

const sdk = new SweeziSDK(clientId, secret);

const newOrder = new Order(
	"Contact",
	"mail@mail.com",
	"1",
	{
		city: "Leiria",
		countryId: "1",
		postalCode: "2410-112",
		state: "Leiria",
		street: "test"
	},
	{
		city: "Valdecaballeros",
		countryId: "210",
		postalCode: "06689",
		state: "Badajoz",
		street: "D.Dinis"
	},
	[
		{
			description: "item description",
			height: 4,
			id: 0,
			length: 2,
			quantity: 2,
			sku: "string",
			weight: 2,
			width: 2
		}
	]
);

await sdk.createOrder(402, newOrder)
```

## All methods
### Stores
- Get all user stores

  `sdk.getMyStores()`

- Get a store address

  `sdk.getMyStoreAddress(storeId)`

- Get a store address

  `sdk.getMySweeziOrders(storeId, customerOrderId)`

### Orders

- Request all store orders

  `sdk.getAllOrders(storeId, search, sort, order, startIndex, maxResults)`
  
  The values of `search`, `sort`, `order`, `startIndex` and `maxResults` are optional. 

- Request a store order

  `sdk.getOrder(storeId, orderId)`

- Create an order 

  `sdk.createOrder(storeId, order)`

- Update an order 

  `sdk.updateOrder(storeId, orderId, orderUpdated)`
  
### Sweezi Spots
- Get Sweezi Spots 

  `sdk.getSweeziSpots(countryCode, postalCode)`
  
  example: `sdk.getSweeziSpots('PT', 2400)`

### Others

- Get all countries 

  `sdk.getCountries()`

- Get all services of a plan

  `sdk.getServices(planId)`

- Get tracking information

  `sdk.getMySweeziOrderTracking(storeId, orderId)`
  `sdk.getTracking(trackingNumber)`

## Data objects
- `Order(contactName, email, serviceId, receiverAddress, shipperAddress, items)`
- `Item(description, height, length, quantity, weight, width)`
- `Address(city, countryId, postalCode, state, street, street2)`
