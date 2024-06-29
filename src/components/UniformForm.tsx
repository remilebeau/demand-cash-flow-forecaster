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
    distMax: z.coerce.number({
      required_error: "Maximum is required",
      invalid_type_error: "Maximum must be a number",
    }),
    simPeriodsPerYear: z.coerce.number({
      required_error: "Periods per year is required",
      invalid_type_error: "Periods per year must be a number",
    }),
  })
  // validate that min < max and simPeriodsPerYear > 0
  .refine(
    (fields) => fields.distMin < fields.distMax && fields.simPeriodsPerYear > 0,
    {
      message:
        "Min must be less than max. Periods per year must be greater than 0",
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
      distMax: undefined,
      simPeriodsPerYear: undefined,
    },
  });

  // define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { distMin, distMax, simPeriodsPerYear } = values;
    router.push(
      `/results/uniform?distMin=${distMin}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`,
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
                  placeholder="Minimum demand / cash flow per period"
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
                  placeholder="Maximum demand / cash flow per period"
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
