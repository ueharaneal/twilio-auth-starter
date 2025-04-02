import { View, Text } from "react-native";
import React, { useState } from "react";
import Layout from "./_layout";
import { useAuth } from "@/providers/AuthProvider";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function Verify() {
  const router = useRouter();
  const { phoneNumber } = useLocalSearchParams();
  const [token, setToken] = useState("");

  console.log("phone", phoneNumber);
  const handleVerify = async () => {
    if (!token || token.length < 6) {
      console.log("error", "otp is not valid");
      return;
    }
    console.log("hi: ", token);
    console.log(phoneNumber);
    const { data, error } = await supabase.auth.verifyOtp({
      phone: phoneNumber as string,
      token: token,
      type: "sms",
    });
    if (!error) {
      console.error("Verification faild");
    }
    console.log("data: ", data, error);
  };
  return (
    <Layout onPress={handleVerify} buttonName="Enter OTP" label="Verify Text">
      <OTPInputView
        pinCount={6}
        autoFocusOnLoad={true}
        onCodeChanged={setToken}
        onCodeFilled={handleVerify}
        codeInputFieldStyle={{
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          color: "black",
        }}
      />
    </Layout>
  );
}
