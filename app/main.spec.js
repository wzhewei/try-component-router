describe('test main app', function(){

  var $componentController, myBlogsService;

  myBlogsService = {
      getBlogs: jasmine.createSpy('getBlogs').and.returnValue({
        then: function () {}
      })
  }

  beforeEach(module('mainApp'));
  beforeEach(module(function($provide) {
    $provide.value('myBlogsService', myBlogsService);
  }));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('$onInit has been called',function(){
    var ctrl = $componentController('mainAppComponent', null, {});
    ctrl.$onInit();
    expect(ctrl.$onInit).toHaveBeenCalled();
   });
});
