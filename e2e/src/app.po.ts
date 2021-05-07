import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  

  // async navigateTo(): Promise<unknown> {
  //   return browser.get(browser.baseUrl);
  // }

  // async getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText();
  // }
}
