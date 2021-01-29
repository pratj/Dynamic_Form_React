import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "../components/Form";

const cardInfo = {
  category: "Motor Insurance",
  product: "Car Insurance",
};

const setOpenPopup = true;

test("renders form component", () => {
  shallow(<Form />);
});

test("renders form component with parent div", () => {
  const wrapper = shallow(<Form />);
  expect(wrapper.find(".form").length).toBe(1);
});

// test("accepts form props", () => {
//   //   console.log(shallow(<Form />).debug());
//   const wrapper = mount(
//     <Form cardInfo={cardInfo} setOpenPopup={setOpenPopup} />
//   );
//   expect(wrapper.props().cardInfo).toEqual(cardInfo);
// });

test("Form snapshots", () => {
  const formTree = shallow(
    <Form cardInfo={cardInfo} setOpenPopup={setOpenPopup} />
  );
  expect(toJson(formTree)).toMatchSnapshot();
});
