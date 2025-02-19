"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, LoaderCircle } from "lucide-react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useUserSignInWithGoogleMutation } from "@/lib/endpoints";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { signUp } from "@/lib/auth-client";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
  })
  .refine((data) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{7,}$/.test(data.password), {
    message: "At least 7 characters, at least 1 number or symbol.",
    path: ["password"],
  })
  .refine((data) => data.name.length > 2, {
    message: "Name must be at least 3 characters.",
    path: ["name"],
  });

export default function SignUpPage() {
  const router = useRouter();
  const signInWithGoogle = useUserSignInWithGoogleMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const queryClient = useQueryClient();

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    const { error } = await signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
    });

    if (error) {
      return form.setError("password", { message: error.message });
    }

    queryClient.invalidateQueries({ queryKey: ["session"] });
    router.push("/");
  };

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center gap-6"
      )}
    >
      <div className="w-full max-w-4xl">
        <Link href="/" className="inline-block md:-translate-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground gap-1 rounded-full"
          >
            <ArrowLeftIcon className="h-4 w-4" /> Home
          </Button>
        </Link>
      </div>
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome to Acme Inc</h1>
                  <p className="text-muted-foreground text-balance">
                    Sign up to your Acme Inc account
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="name" className="mb-2 inline-block">
                        Name
                      </Label>
                      <Input placeholder="Ali Samadi" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email" className="mb-2 inline-block">
                        Email
                      </Label>
                      <Input placeholder="Email" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="password" className="mb-2 inline-block">
                        Password
                      </Label>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {form.formState.isSubmitting ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    "Sign up"
                  )}
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-background text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => signInWithGoogle.mutate()}
                    type="button"
                  >
                    {signInWithGoogle.isPending ? (
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    <span className="sr-only">Login with Google</span>
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="underline underline-offset-4"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=2246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
