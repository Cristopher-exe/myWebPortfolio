import React, { useState } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { TbPointFilled } from "react-icons/tb";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDialog = ({ isOpen, onClose}: CustomDialogProps) => {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      scroll="paper"
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: '#1D2432',
          boxShadow: 'none',
          color:'#E5EAF2'
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Work Experience
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>
           <span className="font-bold">Project: YB Capital Investment</span>
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <span>Technologies:</span>
          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Front-End: Vue.js 3, Vuetify, Sass, Vue Test Utils & UI/UX best practices</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Back-End: Laravel 9, JSON:API, Docker</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Infrastructure: AWS (S3, CloudFront, Load Balancer, EC2, ECR, ECS, RDS , IAM and VPC).</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span> Other: GIT, GitHub Actions</span>
              </div>
            </li>
          </ul>

          <Typography className="mt-5" gutterBottom>
          <span>Responsabilities:</span>
          </Typography>

          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Design and development of the Front-End of the YB Capital Investment application</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Writing reusable, testable and efficient code</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Design, implement and maintain features and module</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Administration of AWS services</span>
              </div>
            </li>
          </ul>
        </Typography>

        <hr className="my-10"/>

        <Typography gutterBottom>
           <span className="font-bold">Project: Maya Estate Investment</span>
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <span>Technologies:</span>
          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Front-End: React.JS 18, Redux, Sass</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Deploy: AWS (S3, CloudFront and IAM ), GIT and GitHub Actions.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Other: SEO best practices & Google Analitys</span>
              </div>
            </li>
          </ul>

          <Typography className="mt-5" gutterBottom>
          <span>Responsabilities:</span>
          </Typography>

          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Design and development of the website</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Writing reusable, testable and efficient code</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Apply good SEO practices</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Implementation and administration of Google Analytics</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Administration of AWS services</span>
              </div>
            </li>
          </ul>
        </Typography>

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Salir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
