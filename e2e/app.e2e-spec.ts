import { Ang2BarcodePage } from './app.po';

describe('ang2-barcode App', () => {
  let page: Ang2BarcodePage;

  beforeEach(() => {
    page = new Ang2BarcodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
