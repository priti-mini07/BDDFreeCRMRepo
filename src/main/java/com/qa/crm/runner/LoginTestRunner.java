package com.qa.crm.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(
		features="/Users/krishna/eclipse-workspace/BDDFreeCRM/src/main/java/com/qa/crm/feature/login.feature",
		glue= {"com.qa.crm.stepdefinition"},
		dryRun= false,
		monochrome=true,
		format = {"pretty",
				"html:target/cucumber-report/cucumberReport", "json:target/cucumber-report/CucumberTestReport.json"},
		plugin= "json:target/cucumber-report/CucumberTestReport.json")

public class LoginTestRunner extends AbstractTestNGCucumberTests {

}
