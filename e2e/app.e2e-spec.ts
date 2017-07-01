import { OlyncWebPage } from './app.po';

describe('olync-web App', () => {
  let page: OlyncWebPage;

  beforeEach(() => {
    page = new OlyncWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
