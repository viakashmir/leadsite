"use client";

import { useActionState, useRef } from "react";
import { deleteCity } from "@/lib/adminActions";

type City = { id: string; name: string };

export default function CityManager({
  cities,
  createCityAction,
}: {
  cities: City[];
  createCityAction: (formData: FormData) => Promise<{ error?: string }>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => {
      const result = await createCityAction(formData);
      if (!result.error) formRef.current?.reset();
      return result;
    },
    {} as { error?: string },
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <form key={city.id} action={deleteCity.bind(null, city.id)}>
            <button
              type="submit"
              title="Remove city"
              className="flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700 hover:border-red-400 hover:text-red-600"
            >
              {city.name} <span aria-hidden>×</span>
            </button>
          </form>
        ))}
        {cities.length === 0 && <p className="text-sm text-zinc-500">No cities yet.</p>}
      </div>
      <form ref={formRef} action={formAction} className="mt-3 flex gap-2">
        <input
          name="cityName"
          placeholder="Add a city, e.g. Munnar"
          className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Adding..." : "Add"}
        </button>
      </form>
      {state?.error && <p className="mt-1 text-xs text-red-600">{state.error}</p>}
    </div>
  );
}
