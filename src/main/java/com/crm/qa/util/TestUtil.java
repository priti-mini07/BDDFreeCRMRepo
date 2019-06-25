package com.crm.qa.util;

import java.io.File;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.io.Files;
import com.google.gson.Gson;

public class TestUtil {
	
	public static long PAGE_LOAD_TIMEOUT=30;
	public static long IMPLICIT_WAIT=10;
	public static String TESTDATA_SHEET_PATH="/Users/krishna/eclipse-workspace/BDDFreeCRM/src/main/java/com/crm/qa/testdata/";
	static Workbook book;
	static Sheet sheet;
	static FileInputStream fin=null;
	
	public static Map getDataFromMap(String jsonFile) throws FileNotFoundException, IOException, ParseException{
		System.out.println(TESTDATA_SHEET_PATH+jsonFile+".json");
		JSONParser jsonParser= new JSONParser();
		//JSONObject jsonObj= jsonParser.parse(new FileReader(TESTDATA_SHEET_PATH));
		Object obj = jsonParser.parse(new FileReader(TESTDATA_SHEET_PATH+jsonFile+".json"));

        JSONObject jsonObject = (JSONObject) obj;
        Map<String, Map<String,String>> map= new Gson().fromJson(jsonObject.toString(), HashMap.class);
        return map;
//        Map<String, String> map= new Gson().fromJson(jsonObject.toString(), HashMap.class);
//        //map.get(key)
//		
//		
//		return map.get(key);
		 
	}
	
	

	public static void waitForInvisibilityOfSpinner(WebDriver driver, WebElement element, int time){
		new WebDriverWait(driver,time).until(ExpectedConditions.invisibilityOf(element));
	}
	
	public void clickOn(WebDriver driver, WebElement element, int time){
		new WebDriverWait(driver,time).until(ExpectedConditions.elementToBeClickable(element));
		element.click();
	}
	
	public void sendKEYS(WebDriver driver, WebElement element, int time, String value){
		new WebDriverWait(driver,time).until(ExpectedConditions.elementToBeClickable(element));
		element.sendKeys(value);
	}
		
	public void switchToFrame() {
		
	}
	
	public static void TakeScreenshot(String methodName, WebDriver driver) {
		File src= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(src, new File("/Users/krishna/eclipse-workspace/FreeCrmTest/screenshots"+methodName+".png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
		
		
	}
	


