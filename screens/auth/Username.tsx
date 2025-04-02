import { View, Text } from "react-native";
import React from "react";
import Layout from "./_layout";
import { useState } from "react";
import { Input, InputField } from "@/components/ui/input";

const Username = () => {
  const [username, setUsername] = useState("");
  const handleSaveUsername = async () => {
    console.log(username);
  };

  return (
    <Layout
      onPress={handleSaveUsername}
      label="Enter username"
      buttonName="Complete"
    >
      <Input>
        <InputField
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
      </Input>
    </Layout>
  );
};

export default Username;
