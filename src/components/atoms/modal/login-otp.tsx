"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import Modal from '@/components/ui/modal';
import { useLoginWithOTPMutation } from '@/store/api/user-api';
import { setAppLocalStorage } from '@/lib/utils';


const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

interface ILoginOTPProps {
    isOpen: boolean;
    onClose: () => void;
    loading: boolean;
}

const LoginOTP: React.FC<ILoginOTPProps> = ({
    isOpen,
    onClose,
    loading
}) => {
    const [loginWithOtp] = useLoginWithOTPMutation();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("🚀 ~ onSubmit ~ data:", data);
        loginWithOtp(data)
            .unwrap()
            .then(res => {
                setAppLocalStorage({ name: "userInfo", payload: res })
                console.log("🚀 ~ onSubmit ~ res:", res);
            })
            .catch(e => {
                console.log("🚀 ~ onSubmit ~ e:", e);
            })
    }

    return (
        <Modal
            title="Login"
            description=""
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>One-Time Password</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the one-time password sent to your phone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </Modal>
    )
}

export default LoginOTP
