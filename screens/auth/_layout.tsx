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
  onPress,
}: {
  children: React.ReactNode;
  buttonName: string;
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
            }}
            className="h-full "
          >
            <VStack className="items-center justify-center">
              <ThreadsIcon size={40} />
              <Text className="text-2xl font-bold">Twilio Auth App</Text>
            </VStack>
            {children}
            <VStack>
              <Button className="items-center" onPress={onPress}>
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
