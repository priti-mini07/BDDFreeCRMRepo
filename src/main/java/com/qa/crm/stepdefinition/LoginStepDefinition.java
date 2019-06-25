package com.qa.crm.stepdefinition;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;

import org.json.simple.parser.ParseException;
import org.junit.Assert;

import com.crm.qa.base.BrowserFactory;
import com.crm.qa.base.TestBase;
import com.crm.qa.pages.ContactsPage;
import com.crm.qa.pages.HomePage;
import com.crm.qa.pages.LoginPage;
import com.crm.qa.util.TestUtil;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends TestBase {
     
	LoginPage loginPage;
	HomePage homePage;
	ContactsPage contactsPage;
	  public LoginStepDefinition() throws InterruptedException {
		  super();
		  initialization();
		  loginPage=new LoginPage();
		  //contactsPage= homePage.navigateToContactsPage();
		  
	  }
	
	@Given("^The user in on login page$")
	public void the_user_in_on_login_page() throws Throwable {
		driver.get(prop.getProperty("url"));
		//return BrowserFactory.getInstance().getDriver().getTitle();
	    
	}

	@When("^the user enters username and password$")
	public void the_user_enters_Priti_and_Password(DataTable rawData) throws Throwable {
//		homePage=loginPage.enterInput(prop.getProperty("username"), prop.getProperty("password"));
		homePage=loginPage.enterInput(rawData.raw().get(0).get(0), rawData.raw().get(0).get(1));
		
		
	    
	}

	@Then("^the user is successfully logged into the application$")
	public void the_user_is_successfully_logged_into_the_application() throws Throwable {
		Assert.assertEquals(homePage.verifyHomePage(),true);
		//System.out.println(TestUtil.getDataFromMap("user", "user"));
	   
	}
	

@When("^user is entering data for (.*)$")	
	public void verifyNewContactTest(String data) throws FileNotFoundException, IOException, ParseException {
	    contactsPage= homePage.navigateToContactsPage();
	    //contactsPage.createNewContactLink();
		Map<String, Map<String,String>> map=TestUtil.getDataFromMap("user");
		
		Map<String, String> users=map.get(data);
		
		
		String fname=users.get("firstName");
		String lName=users.get("lastName");
		String company=users.get("Company");
		String socialAcct=users.get("Social");
		String description=users.get("Description");
		
		
		contactsPage.createNewContactLink();
		contactsPage.enterDetailsOfNewContact(fname, lName, company, socialAcct, description);
		driver.quit();
		
	}
}
