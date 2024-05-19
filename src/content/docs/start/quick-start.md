---
title: Quick Start
description: Get started with Chai Builder in 5 minutes.
---

### Getting started with NextJS

##### Step 1:
Create a free app on [Chai Builder](https://apps.chaibuilder.com/) and get the Auth token & app key. This works
as a backend service for your app. 

:::note
You can also use your own backend service if you wish to with some additional setup.
:::

##### Step 2:
Run the following command in your terminal. This command will create a new `Next JS` 
project in a directory called `my-app` with Chai Builder installed.

```bash
npx chaibuilder-app my-app
```


##### Step 3:
Add the environment variables in `.env` file from step 1.

```bash
CHAIBUILDER_APP_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
CHAIBUILDER_AUTH_SECRET=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```


##### Step 4: 
Navigate to the newly created directory, install the dependencies and start the development server.
```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. and goto `http://localhost:3000/admin` to 
access the admin panel.


##### Step 5:
Login to the admin panel using the credentials you provided in step 1 and start building your website.

Happy Building!