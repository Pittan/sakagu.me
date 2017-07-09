import { Sakagu.MePage } from './app.po';

describe('sakagu.me App', () => {
  let page: Sakagu.MePage;

  beforeEach(() => {
    page = new Sakagu.MePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to de!!');
  });
});
