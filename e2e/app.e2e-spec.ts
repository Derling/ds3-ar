import { Ds3AppPage } from './app.po';

describe('ds3-app App', () => {
  let page: Ds3AppPage;

  beforeEach(() => {
    page = new Ds3AppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
