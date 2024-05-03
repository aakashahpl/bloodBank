import React, { useEffect, useState } from "react";
import { useForm, handleSubmit } from "react-hook-form";
import { date, z } from "zod";
import { supabase } from '../../client';
import { LampDesk } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  gender: z.string().nonempty({
    message: "Gender is required.",
  }),
  dateOfBirth: z.string().nonempty({
    message: "Gender is required.",
  }),
  bloodType: z.string().nonempty({
    message: "Blood type is required.",
  }),
  contactInfo: z.object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    phone: z.string().refine(
      (value) => {
        return true;
      },
      {
        message: "Invalid phone number.",
      }
    ),
  }),
});

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: async (data) => {
      try {
        const validatedData = formSchema.parse(data);
        return { values: validatedData, errors: {} };
      } catch (error) {
        return { values: {}, errors: error.formErrors.fieldErrors };
      }
    },
  });

  const onSubmit = async (info) => {
    console.log("Submitted data:", info);
    const { data, error } = await supabase
      .from('donor')
      .insert([
        { 'donorid': rownum + 1, name: info.username, gender: info.gender, dateofbirth: info.dateOfBirth, bloodtype: info.bloodType, contactinfo: info.contactInfo }
      ])
      .select()

    console.log('asfdasdf', error)
  };

  const [rownum, setrowcount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('donor')
          .select('donorid', 'COUNT(*)');
        if (error) {
          throw error;
        }
        setrowcount(data.length);
        console.log(data.length)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" w-full h-screen  bg-[#6c757d]">
      <div className="w-full flex flex-col  items-center justify-center h-screen">
        <form
          className=" flex flex-col gap-3 bg-white text-black w-4/6 px-80 h-4/6 justify-between items-center py-6 font-bold rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-bold">Fill Out Your Information</h3>
          <div className=" flex flex-row justify-between items-center w-full">
            <label>Username</label>
            <input
              className=" rounded-sm h-10 w-80 bg-slate-400 px-4"
              type="text"
              {...register("username")}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <label>Gender</label>
            <input
              className=" rounded-sm h-10 w-80 bg-slate-400 px-4"
              type="text"
              {...register("gender")}
            />
            {errors.gender && <span>{errors.gender.message}</span>}
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <label>Date of Birth</label>
            <input
              className=" rounded-sm h-10 w-80 bg-slate-400 px-4"
              type="text"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <label>Blood Type</label>
            <input
              className=" rounded-sm h-10 w-80 bg-slate-400 px-4"
              type="text"
              {...register("bloodType")}
            />
            {errors.bloodType && <span>{errors.bloodType.message}</span>}
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <label>Email</label>
            <input
              className=" rounded-sm h-10 w-80 bg-slate-400 px-4"
              type="email"
              {...register("contactInfo.email")}
            />
            {errors.contactInfo?.email && (
              <span>{errors.contactInfo.email.message}</span>
            )}
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <label>Phone</label>
            <input
              className=" rounded-sm h-10 w-80 bg-slate-400"
              type="text"
              {...register("contactInfo.phone")}
            />
            {errors.contactInfo?.phone && (
              <span>{errors.contactInfo.phone.message}</span>
            )}
          </div>
          <button className=" border-[1px] border-solid border-black rounded-lg px-20 py-2 hover:bg-black hover:text-white " type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
