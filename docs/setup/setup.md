# Quick Setup

Follow the steps given below to set up and install WSO2 Identity Server on your computer in quick time.

## Install the WSO2 Identity Server

Follow the steps given below.

1. Download and install the Java SE SDK (JDK) version 11 or 17.
2. Go to [WSO2 Identity Server official website](https://wso2.com/identity-server/) and click on **Download**.
3. Install by downloading the **LATEST RELEASE**.

:::info

The installation location of WSO2 Identity Server is referred to as `{IS_HOME}`.

:::

## Start the WSO2 Identity Server

To start WSO2 IS, open a terminal, navigate to the `<IS_HOME>/bin` folder, and execute one of the following commands:

- On Linux/MacOS

    ``` bash
    sh wso2server.sh
    ```

- On Windows

    ``` bash
    wso2server.bat
    ```

Note that the following log appears in the command prompt when the server starts:

![QSG start server](/img/qsg-start-server.png)

## Shutting down the server

To shutdown the server, press `Ctrl + C`. Note that the following log appears in the command prompt on server shutdown.

![QSG stop server](/img/qsg-stop-server.png)

## Access the Console

Once the server has started, you can access the Identity Server console by navigating to the following URL.

`https://{Server Host}:{Port}/console`

For example, if you are using default settings, the console URL will be `https://localhost:9443/console`.

You will then be presented with the login screen. Enter `admin` for both username and password fields to login as the admin user.

## What's next?

Add login to your application using the Identity Server or try it on a sample application. [Try integrating IS into apps](/get-started/try-samples).

