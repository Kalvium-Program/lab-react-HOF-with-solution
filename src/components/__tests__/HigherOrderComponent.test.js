import HigherOrderComponent from "../HigherOrderComponent"

describe("testing",function(){
  const val = new HigherOrderComponent();
  it("Defines specialAddition", function(){
   expect(val.renderItems).toEqual(expect.any(Function));
  });})