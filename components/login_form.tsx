"use client";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { supabase } from "@/helpers/supabase";
import { SetStateAction, useContext, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { AuthContext } from "@/contexts/auth_context";

export default function LoginForm(props: {
  setSession: (s: SetStateAction<Session | null>) => void;
}) {
  const { selectedRole, setSelectedRole } = useContext(AuthContext);

  const loginWithGitHub = async () => {
    if (!selectedRole) {
      alert("Please select your Role");
    }
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  useEffect(() => {
    supabase.auth.getSession().then((d) => {
      if (d.error === null && selectedRole.length > 0) {
        props.setSession(d.data.session as any);
      } else {
      }
    });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Select your role
            </FormLabel>
            <RadioGroup
              value={selectedRole}
              onChange={(event) => {
                setSelectedRole(event.target.value);
                localStorage.setItem("role", event.target.value);
              }}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                value="Author"
                control={<Radio />}
                label="Author"
              />
              <FormControlLabel
                value="Commentator"
                control={<Radio />}
                label="Commentator"
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: "flex", mt: 0.5, mb: 0.5 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ ml: 0.5 }}
              onClick={loginWithGitHub}
            >
              Log in with GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
