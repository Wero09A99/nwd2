import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const providers = [{ id: 'credentials', name: 'Credentials' }];
// preview-start
const BRANDING = {
  logo: (
    <img
      src="/Logo_NDW.jpg"
      alt="NDW logo"
      style={{ height: 200 }}
    />
  ),
  title: "NDW",
};
// preview-end

/*const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};
*/
export default function BrandingSignInPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/home");
  };
  return (
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        //signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: false },
          submitButton: { onClick: redirectHome },
        }}
      />
    </AppProvider>
  );
}
