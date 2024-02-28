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
        Work experience
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
          Trabaje como Jr. Frontend Developer, liderando proyectos clave como la
          plataforma <span className="font-bold">YB Investment</span> y la
          página web de la inmobiliaria{" "}
          <span className="font-bold">Maya Estate Investment</span>.
          Implementando tecnologías modernas y gestión de servicios en la nube
          de AWS.
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <p>
            Lideré el diseño e implementación de la plataforma "YB Investment",
            utilizando tecnologías como:
          </p>
          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Vue.js 3</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Pinia</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Vuetify</span>
              </div>
            </li>
          </ul>

          <p>
            Para desplegar el Frontend de la aplicación usamos los siguientes
            servicios:
          </p>

          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS S3</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS CloudFront</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>GitHub Actions</span>
              </div>
            </li>
          </ul>
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <p>
            Lideré el diseño e implementación de la página web de la
            inmobiliaria Maya Estate Investment, utilizando:
          </p>

          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>React</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Redux</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Sass</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS S3</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS CloudFront</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AGitHub Actions</span>
              </div>
            </li>
          </ul>
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <p>
          Además, mi rol incluía la gestión y mantenimiento de los servicios en la nube de AWS, como:
          </p>

          <ul>
          <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS Billing and Costs</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS Elastic compute cloud (EC2)</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS Elastic Container Service (ECS)</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS Elastic Container Registry (ECR)</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>AWS Relational Database Service (RDS)</span>
              </div>
            </li>
          </ul>
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <p>
          En resumen, mi experiencia en&nbsp;
          <a
                href="https://ymanbrothercapital.com/"
                target="_blank"
                className="underline"
              >
                Yman Brother Capital
              </a> me ha permitido fortalecer mis habilidades técnicas en el desarrollo web y la gestión de servicios en la nube, contribuyendo significativamente al éxito de la empresa al mejorar la calidad, la escalabilidad y la seguridad de sus productos y servicios digitales.
          </p>
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
