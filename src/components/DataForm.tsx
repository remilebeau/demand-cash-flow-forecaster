"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// define form schema

const formSchema = z
  .object({
    distMin: z.coerce.number({
      required_error: "Minimum is required",
      invalid_type_error: "Minimum must be a number",
    }),
    distMode: z.coerce.number({
      required_error: "Mode is required",
      invalid_type_error: "Mode must be a number",
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
  // validate that min <= mode <= max and min < max and simPeriodsPerYear > 0
  .refine(
    (fields) =>
      fields.distMin <= fields.distMode &&
      fields.distMode <= fields.distMax &&
      fields.distMin < fields.distMax &&
      fields.simPeriodsPerYear > 0,
    {
      message:
        "The following must be true: 1) min <= mode <= max 2) min < max and 3) simPeriodsPerYear > 0",
      path: ["simPeriodsPerYear"],
    },
  );

export default function DataForm() {
  const router = useRouter();
  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distMin: undefined,
      distMode: undefined,
      distMax: undefined,
      simPeriodsPerYear: undefined,
    },
  });

  // define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { distMin, distMode, distMax, simPeriodsPerYear } = values;
    router.push(
      `/results?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`,
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="distMin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter Minimum" {...field} />
              </FormControl>
              <FormDescription>
                The minimum cash flow per period.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distMode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter Mode" {...field} />
              </FormControl>
              <FormDescription>
                The most likely cash flow per period.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distMax"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter Maximum" {...field} />
              </FormControl>
              <FormDescription>
                The maximum cash flow per period.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="simPeriodsPerYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Periods per Year</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter Periods per Year"
                  {...field}
                />
              </FormControl>
              <FormDescription>The number of periods per year.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
