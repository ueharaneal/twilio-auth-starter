import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React from "react";
import ThreadsIcon from "@/assets/svg/ThreadsIcon";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";

export default ({
  children,
  buttonName,
  label,
  onPress,
}: {
  children: React.ReactNode;
  buttonName: string;
  label: string;
  onPress: () => void;
}) => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <VStack
            style={{
              flex: 1,
              justifyContent: "space-between",
              width: "100%",
              paddingHorizontal: 8,
            }}
            className="h-full "
          >
            <VStack className="items-center justify-center">
              <ThreadsIcon size={40} />
              <Text className="text-2xl font-bold">Twilio Auth App</Text>
            </VStack>
            <VStack style={{ gap: 6 }}>
              <Text className="font-bold">{label}</Text>
              {children}
            </VStack>
            <VStack>
              <Button className="" onPress={onPress} size="lg">
                <ButtonText className="text-2xl font-bold">
                  {buttonName}{" "}
                </ButtonText>
              </Button>
            </VStack>
          </VStack>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
