import UserPage from "./src/screen/UserPage";
import { Provider as PaperProvider } from "react-native-paper";
import { View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserPage />
    </ApolloProvider>
  );
};

export default App;
