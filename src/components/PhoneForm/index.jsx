import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrder,
  fetchDiscount,
} from "../../core/redux/store/slices/orderSlice";
import { cleanCart } from "../../core/redux/store/slices/cartSlices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./PhoneForm.module.css";
import { useEffect } from "react";

const PhoneForm = ({ textButton, inputName }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onClick",
  });

  const onSubmit = (data) => {
    if (inputName === "order") {
      dispatch(fetchOrder(data.phone));
      dispatch(cleanCart());
      reset();
      notify("Thank's for your order!");
    } else {
      dispatch(fetchDiscount(data.phone));
      reset()
      notify("5% discount has bin sent to your phone number!");
    }
  };
  const notify = (notifyText) =>
    toast(notifyText, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        background: "green",
        color: "white",
      },
    });

  useEffect(() => {}, [dispatch]);

  let disabled = inputName === 'order' &&  cart.length <= 0? "disabled": null;
  return (
    <>
      <form className={styles.phone_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="+49"
          {...register("phone", {
            required: "Phone number required",
            maxLength: 14,
            pattern: {
              value: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/,
              message: "Please enter following phone number (+491517953677)",
            },
          })}
        />
        {errors.phone && (
          <p role="alert" style={{ color: "red", fontSize: "11px" }}>
            {errors.phone.message}
          </p>
        )}

        <input
          type="submit"
          value={textButton}
          className={inputName === "discount" ? styles.discount_btn : null}
          name={inputName}
          disabled={disabled}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default PhoneForm;
