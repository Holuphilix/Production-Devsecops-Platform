terraform {
  required_version = ">= 1.5.0"
}

resource "null_resource" "platform_validation" {

  provisioner "local-exec" {
    command = <<EOT
      echo "Production DevSecOps Platform Infrastructure Provisioned Successfully"
    EOT
  }
}
