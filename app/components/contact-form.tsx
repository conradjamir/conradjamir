"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { submitContactForm } from "@/app/actions/contact";
import { CheckCircle, AlertCircle } from "lucide-react";

const initialState = {
	message: "",
	errors: {},
	success: false,
};

export default function ContactForm() {
	const [state, formAction, pending] = useActionState(submitContactForm, initialState);
	const formRef = useRef<HTMLFormElement>(null);

	// Reset form on successful submission
	useEffect(() => {
		if (state.success) {
			formRef.current?.reset();
		}
	}, [state.success]);

	return (
		<Card className="w-full bg-black text-white border-none max-w-[1/2] p-0">
			<CardContent className="p-0">
				{state.message && !state.success && (
					<div className="flex items-center gap-2 p-4 mb-6 border border-red-200 rounded-md bg-red-50">
						<AlertCircle className="w-5 h-5 text-red-600" />
						<p className="text-red-800">{state.message}</p>
					</div>
				)}

				<form ref={formRef} action={formAction} className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="name">Name *</Label>
						<Input
							id="name"
							name="name"
							type="text"
							required
							minLength={2}
							maxLength={50}
							placeholder="Enter your full name"
							className={state.errors?.name ? "border-red-500" : ""}
						/>
						{state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>}
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email *</Label>
						<Input
							id="email"
							name="email"
							type="email"
							required
							placeholder="Enter your email address"
							className={state.errors?.email ? "border-red-500" : ""}
						/>
						{state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
					</div>

					<div className="space-y-2">
						<Label htmlFor="message">Message *</Label>
						<Textarea
							id="message"
							name="message"
							required
							minLength={10}
							maxLength={1000}
							rows={5}
							placeholder="Enter your message here..."
							className={state.errors?.message ? "border-red-500" : ""}
						/>
						{state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
					</div>

					<Button type="submit" disabled={pending} className="w-full text-black bg-white hover:bg-black hover:border-1 hover:border-white hover:text-white">
						{pending ? "Sending..." : "Send Message"}
					</Button>          
				</form>
        {state.success && (
          <div className="flex justify-around gap-2 p-4 mt-6 border border-green-200 rounded-md bg-green-50">
            <div className="flex items-center justify-center gap-4"><CheckCircle className="inline w-5 h-5 text-green-600" />
            <span className="m-auto text-green-800">Message sent successfully! We&rsquo;ll get back to you soon.</span></div>
          </div>
        )}
			</CardContent>
		</Card>
	);
}
