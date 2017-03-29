import { NgSwitchPage } from './app.po';

describe('ng-switch App', function() {
  let page: NgSwitchPage;

  beforeEach(() => {
    page = new NgSwitchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
