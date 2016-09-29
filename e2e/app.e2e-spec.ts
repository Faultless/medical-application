import { MedicalBookPage } from './app.po';

describe('medical-book App', function() {
  let page: MedicalBookPage;

  beforeEach(() => {
    page = new MedicalBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mb works!');
  });
});
