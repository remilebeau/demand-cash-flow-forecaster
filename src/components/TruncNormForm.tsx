"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

// define form schema

const formSchema = z
  .object({
    distMin: z.coerce.number({
      required_error: "Minimum is required",
      invalid_type_error: "Minimum must be a number",
    }),
    distMean: z.coerce.number({
      required_error: "Mean is required",
      invalid_type_error: "Mean must be a number",
    }),
    distSD: z.coerce.number({
      required_error: "Standard deviation is required",
      invalid_type_error: "Standard deviation must be a number",
    }),
    distMax: z.coerce.number({
      required_error: "Maximum is required",
      invalid_type_error: "Maximum must be a number",
    }),
    simPeriodsPerYear: z.coerce.number({
      required_error: "Periods per year is required",
      invalid_type_error: "Periods per year must be a number",
    }),
  })
  // validate that min < mean < max and min < max and SD > 0 and simPeriodsPerYear > 0
  .refine(
    (fields) =>
      fields.distMin < fields.distMean &&
      fields.distMean < fields.distMax &&
      fields.distMin < fields.distMax &&
      fields.distSD > 0 &&
      fields.simPeriodsPerYear > 0,
    {
      message:
        "The following must be true: 1) min < mean < max 2) min < max 3) standard deviation > 0 and 4) simPeriodsPerYear > 0",
      path: ["simPeriodsPerYear"],
    },
  );

export default function TruncNormForm() {
  const router = useRouter();
  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distMin: undefined,
      distMean: undefined,
      distSD: undefined,
      distMax: undefined,
      simPeriodsPerYear: undefined,
    },
  });

  // define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { distMin, distMean, distSD, distMax, simPeriodsPerYear } = values;
    router.push(
      `/results/truncnorm?distMin=${distMin}&distMean=${distMean}&distSD=${distSD}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`,
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="distMin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Minimum cash flow (or demand) per period"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distMean"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Expected cash flow (or demand) per period"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distMax"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Maximum cash flow (or demand) per period"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="distSD"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Standard deviation of cash flow (or demand) per period"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="simPeriodsPerYear"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Periods per Year (e.g. 12 for monthly)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
