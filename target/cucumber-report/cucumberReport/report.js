$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/krishna/eclipse-workspace/BDDFreeCRM/src/main/java/com/qa/crm/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "To check the login",
  "description": "",
  "id": "to-check-the-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To check login functionality",
  "description": "",
  "id": "to-check-the-login;to-check-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The user in on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enters username and password",
  "rows": [
    {
      "cells": [
        "priti.mini07@gmail.com",
        "Freecrm10"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is entering data for \u003cuser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user is successfully logged into the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-check-the-login;to-check-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "user"
      ],
      "line": 12,
      "id": "to-check-the-login;to-check-login-functionality;;1"
    },
    {
      "cells": [
        "Priti",
        "Password",
        "user1"
      ],
      "line": 13,
      "id": "to-check-the-login;to-check-login-functionality;;2"
    },
    {
      "cells": [
        "Krishna",
        "Password",
        "user2"
      ],
      "line": 14,
      "id": "to-check-the-login;to-check-login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "To check login functionality",
  "description": "",
  "id": "to-check-the-login;to-check-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The user in on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enters username and password",
  "rows": [
    {
      "cells": [
        "priti.mini07@gmail.com",
        "Freecrm10"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is entering data for user1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user is successfully logged into the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_in_on_login_page()"
});
formatter.result({
  "duration": 11902002991,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_user_enters_Priti_and_Password(DataTable)"
});
formatter.result({
  "duration": 493632998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.verifyNewContactTest(String)"
});
formatter.result({
  "duration": 5619232570,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_user_is_successfully_logged_into_the_application()"
});
formatter.result({
  "duration": 37367200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krishnas-Air\u0027, ip: \u0027fe80:0:0:0:1d:3f1c:4dda:7a5a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat com.crm.qa.pages.HomePage.verifyHomePage(HomePage.java:37)\n\tat com.qa.crm.stepdefinition.LoginStepDefinition.the_user_is_successfully_logged_into_the_application(LoginStepDefinition.java:53)\n\tat ✽.Then the user is successfully logged into the application(/Users/krishna/eclipse-workspace/BDDFreeCRM/src/main/java/com/qa/crm/feature/login.feature:9)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "To check login functionality",
  "description": "",
  "id": "to-check-the-login;to-check-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The user in on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enters username and password",
  "rows": [
    {
      "cells": [
        "priti.mini07@gmail.com",
        "Freecrm10"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is entering data for user2",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user is successfully logged into the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_in_on_login_page()"
});
formatter.result({
  "duration": 7933812672,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_user_enters_Priti_and_Password(DataTable)"
});
formatter.result({
  "duration": 446704602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.verifyNewContactTest(String)"
});
formatter.result({
  "duration": 5936165987,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_user_is_successfully_logged_into_the_application()"
});
formatter.result({
  "duration": 446447,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krishnas-Air\u0027, ip: \u0027fe80:0:0:0:1d:3f1c:4dda:7a5a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat com.crm.qa.pages.HomePage.verifyHomePage(HomePage.java:37)\n\tat com.qa.crm.stepdefinition.LoginStepDefinition.the_user_is_successfully_logged_into_the_application(LoginStepDefinition.java:53)\n\tat ✽.Then the user is successfully logged into the application(/Users/krishna/eclipse-workspace/BDDFreeCRM/src/main/java/com/qa/crm/feature/login.feature:9)\n",
  "status": "failed"
});
});