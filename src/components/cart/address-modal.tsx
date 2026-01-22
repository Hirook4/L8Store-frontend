import { Addresses } from "@/types/addresses";
import { FormEvent, startTransition, useState, useTransition } from "react";
import z from "zod";

const schema = z.object({
  zipcode: z.string().min(1, "zipcode is required"),
  street: z.string().min(1, "street is required"),
  number: z.string().min(1, "number is required"),
  city: z.string().min(1, "city is required"),
  state: z.string().min(1, "state is required"),
  country: z.string().min(1, "country is required"),
  complement: z.string().optional(),
});

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (address: Addresses) => Promise<void>;
};

export const AddressModal = ({ open, onAdd, onClose }: Props) => {
  const [form, setForm] = useState<Addresses>({
    zipcode: "",
    street: "",
    number: "",
    city: "",
    state: "",
    country: "",
    complement: "",
  });

  const [error, setError] = useState("");
  const [pending, setTransition] = useTransition();

  if (!open) {
    return null;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message || "invalid input");
      return;
    }
    setError("");
    startTransition(async () => {
      try {
        await onAdd(form);
      } catch (err: any) {
        setError(err?.message || "failed to add address");
      }
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50">
      <button
        className="absolute top-2 right-5 text-5xl text-white"
        onClick={onClose}
        disabled={pending}
      >
        &times;
      </button>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">add new address</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="zipcode"
            placeholder="zipcode"
            value={form.zipcode}
            onChange={handleChange}
            disabled={pending}
          />
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="street"
            placeholder="street"
            value={form.street}
            onChange={handleChange}
            disabled={pending}
          />
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="number"
            placeholder="number"
            value={form.number}
            onChange={handleChange}
            disabled={pending}
          />
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="city"
            placeholder="city"
            value={form.city}
            onChange={handleChange}
            disabled={pending}
          />
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="state"
            placeholder="state"
            value={form.state}
            onChange={handleChange}
            disabled={pending}
          />
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="country"
            placeholder="country"
            value={form.country}
            onChange={handleChange}
            disabled={pending}
          />
          <input
            className="border border-gray-200 px-3 py-2 rounded outline-0"
            type="text"
            name="complement"
            placeholder="complement"
            value={form.complement}
            onChange={handleChange}
            disabled={pending}
          />
          <button
            type="submit"
            className=" cursor-pointer bg-blue-600 text-white p-4 rounded-sm"
            disabled={pending}
          >
            {pending ? "saving..." : "save address"}
          </button>
        </form>
      </div>
    </div>
  );
};
