import { ReadPage } from './app.po';

describe('read App', function() {
  let page: ReadPage;

  beforeEach(() => {
    page = new ReadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
