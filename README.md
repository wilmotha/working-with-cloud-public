# Customer Management Service - High-Level Requirements

Account
- ID (internal ID - integer)
- Account Number (external ID - string)
- Balance (decimal value)
- Account Status (can be either Open or Closed)

Customer
- ID (internal ID - integer)
- First Name (string)
- Last Name (string)
- Associated Account

Transaction
- ID (internal ID - integer)
- Amount (decimal value - always positive)
- Transaction Type (can be either Debit or Credit)
- Associated Account

Supported Operations
- Retrieve customer/account details by account number
- Open customer account
- Close customer account
- Apply a transaction to the customer account