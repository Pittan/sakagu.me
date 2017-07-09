import { browser, by, element } from 'protractor';

export class Sakagu.MePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('de-root h1')).getText();
  }
}
