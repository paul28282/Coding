from selenium import webdriver
import time, pyautogui


PATH = '/Volumes/Home_1TB/paul/Desktop/Koodaus/typeRacerHack/Chrome driver/chromedriver'
driver = webdriver.Chrome(PATH)

driver.get('https://play.typeracer.com')
x = 1300
y = 1600
driver.set_window_size(x, y)
driver.set_window_position(x - 100,0)

_inp = input('Paina enteriä')



def hack():
    time.sleep(1.5)
    first = driver.find_element_by_xpath('/html/body/div[2]/div/div[1]/div[2]/table/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[3]/td/div/div/table/tbody/tr[2]/td[3]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/div/span[1]')
    rest = driver.find_element_by_xpath('/html/body/div[2]/div/div[1]/div[2]/table/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[3]/td/div/div/table/tbody/tr[2]/td[3]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/div/span[2]')
    box = driver.find_element_by_xpath('/html/body/div[2]/div/div[1]/div[2]/table/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[3]/td/div/div/table/tbody/tr[2]/td[3]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/div/span[3]')
    text = first.text + rest.text + ' ' + box.text


    pyautogui.typewrite(text)

if _inp == '':
    hack()



