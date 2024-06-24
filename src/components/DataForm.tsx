"use client";
import { useState } from "react";
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

export default function DataForm() {
  // define form schema

  const formSchema = z.object({
    distMin: z.number({
      required_error: "Minimum is required",
      invalid_type_error: "Minimum must be a number",
    }),
    distMode: z.number({
      required_error: "Mode is required",
      invalid_type_error: "Mode must be a number",
    }),
    distMax: z
      .number({
        required_error: "Maximum is required",
        invalid_type_error: "Maximum must be a number",
      })
      // validate that min <= mode <= max and min < max
      .refine(
        (distMax) =>
          !(distMin <= distMode && distMode <= distMax && distMin < distMax),
        {
          message:
            "The following must be true: min <= mode <= max and min < max",
        },
      ),
    simDaysPerYear: z.number({ message: "Days per year is required" }),
  });

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distMin: undefined,
      distMode: undefined,
      distMax: undefined,
      simDaysPerYear: undefined,
    },
  });

  // define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { distMin, distMode, distMax, simDaysPerYear } = values;
    router.push(
      `/results?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simDaysPerYear=${simDaysPerYear}`,
    );
  }

  const router = useRouter();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="distMin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min</FormLabel>
              <FormControl>
                <Input placeholder="Enter Minimum" {...field} />
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
                <Input placeholder="Enter Mode" {...field} />
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
                <Input placeholder="Enter Maximum" {...field} />
              </FormControl>
              <FormDescription>
                The highest cash flow per period.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="simDaysPerYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Periods per Year</FormLabel>
              <FormControl>
                <Input placeholder="Enter Periods per Year" {...field} />
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
