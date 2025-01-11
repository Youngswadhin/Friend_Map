import {
  AtSign,
  CircleUser,
  KeyRound,
  User,
  UserRoundPlus,
} from "lucide-react";
import Modal from "../../../component/modal/modal";
import { Button } from "../../../components/ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputField from "../../../component/input-field/input-field";

const SignupModal = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      age: "",
      address: {
        city: "",
        zip: "",
        country: "",
        state: "",
        location: {
          lat: "",
          long: "",
        },
      },
      hobbies: [],
      image: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Modal
      heading="Sign Up"
      open
      trigger={
        <Button variant="outline" size={"lg"}>
          Sign Up
          <UserRoundPlus
            className="-me-1 ms-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      }
      className="w-[clamp(300px,600px,80vw)]"
    >
      <div className="flex-col flex px-4 py-3 gap-4">
        <div className="flex gap-2 w-full">
          <InputField
            name="email"
            title="Enter Email"
            placeholder="Email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={AtSign}
            flex={1}
          />
          <InputField
            name="password"
            title="Password"
            placeholder="Password"
            type="text"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            password
            flex={1}
          />
        </div>
        <div className="flex gap-2 w-full">
          <InputField
            name="name"
            title="Enter Name"
            placeholder="Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={CircleUser}
            flex={1}
          />
          <InputField
            name="age"
            title="Enter Age"
            placeholder="Age"
            type="text"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={User}
            flex={1}
          />
        </div>
        <div className="flex gap-2 w-full">
          <InputField
            name="country"
            title="Enter Country"
            placeholder="Country"
            type="text"
            value={formik.values.address.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={CircleUser}
            flex={1}
          />
          <InputField
            name="state"
            title="Enter State"
            placeholder="State"
            type="text"
            value={formik.values.address.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={User}
            flex={1}
          />
        </div>
        <div className="flex gap-2 w-full">
          <InputField
            name="city"
            title="Enter City"
            placeholder="City"
            type="text"
            value={formik.values.address.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={CircleUser}
            flex={1}
          />
          <InputField
            name="zip"
            title="Enter Zip"
            placeholder="Zip"
            type="number"
            value={formik.values.address.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={User}
            flex={1}
          />
        </div>
        <div className="flex gap-2 w-full">
          <InputField
            name="lat"
            title="Enter Latitude"
            placeholder="Latitude"
            type="text"
            value={formik.values.address.location.lat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={CircleUser}
            flex={1}
          />
          <InputField
            name="long"
            title="Enter Longitude"
            placeholder="Longitude"
            type="text"
            value={formik.values.address.location.long}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={User}
            flex={1}
          />
        </div>
        <div className="flex gap-2 w-full">
          <InputField
            name="lat"
            title="Enter Latitude"
            placeholder="Latitude"
            type="text"
            value={formik.values.address.location.lat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={CircleUser}
            flex={1}
          />
          <InputField
            name="long"
            title="Enter Longitude"
            placeholder="Longitude"
            type="text"
            value={formik.values.address.location.long}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            preIcon={User}
            flex={1}
          />
        </div>

        <Button variant="default">
          Login
          <KeyRound
            className="-me-1 ms-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </div>
    </Modal>
  );
};

export default SignupModal;
