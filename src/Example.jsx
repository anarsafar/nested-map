import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import FormatBold from '@mui/icons-material/FormatBold';
// import FormatItalic from '@mui/icons-material/FormatItalic';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// import Check from '@mui/icons-material/Check';

export default function Example() {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const questions = [
    {
      id: 1,
      question: "Hello I am a question",
      answers: ["a am first answer", "a am second answer"],
      rate: 0,
    },
    {
      id: 2,
      question: "Hello I am a question",
      answers: ["a am first answer", "a am second answer"],
    },
    {
      id: 3,
      question: "Hello I am a question",
      answers: ["a am first answer", "a am second answer"],
    },
  ];

  return (
    <>
      <FormControl>
        <FormLabel>Your comment</FormLabel>
        <Textarea
          placeholder="Type something here…"
          minRows={3}
          endDecorator={
            <Box
              sx={{
                display: "flex",
                gap: "var(--Textarea-paddingBlock)",
                pt: "var(--Textarea-paddingBlock)",
                borderTop: "1px solid",
                borderColor: "divider",
                flex: "auto",
              }}
            >
              {/* <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton> */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                size="sm"
                placement="bottom-start"
                sx={{ "--List-decorator-size": "24px" }}
              >
                {["200", "normal", "bold"].map((weight) => (
                  <MenuItem
                    key={weight}
                    selected={fontWeight === weight}
                    onClick={() => {
                      setFontWeight(weight);
                      setAnchorEl(null);
                    }}
                    sx={{ fontWeight: weight }}
                  >
                    <ListItemDecorator>
                      {/* {fontWeight === weight && <Check fontSize="sm" />} */}
                    </ListItemDecorator>
                    {weight === "200" ? "lighter" : weight}
                  </MenuItem>
                ))}
              </Menu>
              {/* <IconButton
              variant={italic ? "soft" : "plain"}
              color={italic ? "primary" : "neutral"}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton> */}
              <Button sx={{ ml: "auto" }}>Send</Button>
            </Box>
          }
          sx={{
            minWidth: 300,
            fontWeight,
            fontStyle: italic ? "italic" : "initial",
          }}
        />
      </FormControl>
      {questions.map((question) => (
        <div key={question.id}>
          <h1>{question.question}</h1>
          <div>
            <p>All answers</p>
            {question.answers.map((answer) => (
              <p>{answer}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
