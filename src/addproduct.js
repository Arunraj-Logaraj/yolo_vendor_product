import Upload from "./images/Upload.png";
import UploadIcon from "./images/icons/upload.svg";
import deleteIcon from "./images/icons/delete.svg";
import { useRef, useState } from "react";
import Layout from "./Layout";
import addIcon from "./images/icons/add.svg";
import { useForm } from "react-hook-form";
import { AddProduct } from "./api/addProduct";

const AddProducts = () => {
  const inputFile = useRef(null);
  const [uploadImages, setUploadImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    try {
      let uploadImage = uploadImages?.map((ele) => {
        return {
          name: ele?.name,
          size: ele?.size,
          type: ele?.type,
        };
      });

      const payload = {
        vendor_id: "2",
        product_name: data?.productName,
        package_of_unit: data?.availableStock,
        uom: data?.unit,
        price: data?.pricePerUnit,
        image: JSON.stringify(uploadImage),
        status: data?.status,
      };

      let res = AddProduct(payload);

      if (res) {
        alert("Added Successfully");
      }
    } catch (e) {
      alert(e);
    }
  };

  const onError = (errors, e) => console.log(errors, e);

  const handleFileUpload = (e) => {
    let files = Object.keys(e.target.files).map(
      (key) =>
        e.target.files &&
        setUploadImages((uploadImages) => [
          ...uploadImages,
          e.target.files[key],
        ])
    );
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="container-fluid">
          <h1 className="page-title mb-3 text-center text-md-left">
            Add Products
          </h1>
          <div className="section-data">
            <div className="row">
              <div className="col-lg-6">
                <div className="upload-p mb-3 mb-md-0">
                  <div className="form-group">
                    <label for="">Upload Image</label>
                    <div
                      className="upload-box"
                      onClick={() => {
                        inputFile.current.click();
                      }}
                    >
                      <input
                        type="file"
                        multiple
                        name="logo"
                        id="FileUpload"
                        accept="image/*"
                        ref={inputFile}
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                        required
                      />
                      <div className="upload-content">
                        <img src={Upload} alt="" className="upload-image" />
                        <div style={{ display: "flex" }}>
                          <img
                            src={UploadIcon}
                            alt=""
                            className="upload-icon"
                          />
                          <h6 className="upload-text">Drag your files here</h6>
                        </div>
                      </div>  
                    </div>
                  </div>
                  {uploadImages?.map((ele, index) => {
                    const ImgUrl = URL.createObjectURL(ele);

                    var _size = ele?.size;
                    var fSExt = new Array("Bytes", "KB", "MB", "GB"),
                      i = 0;
                    while (_size > 900) {
                      _size /= 1024;
                      i++;
                    }
                    var exactSize =
                      Math.round(_size * 100) / 100 + " " + fSExt[i];

                    return (
                      <div className="upload-details">
                        <img
                          src={ImgUrl}
                          alt=""
                          style={{
                            width: "40px",
                            height: "40px",
                            paddingRight: "10px",
                          }}
                        />
                        <div className="file-name">
                          <div>{ele?.name}</div>
                          <div className="file-size">{exactSize}</div>
                        </div>
                        <a
                          href
                          className="file-delete"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            console.log(index);
                          }}
                        >
                          <img src={deleteIcon} alt="" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="add-p">
                  <div className="form-group">
                    <label for="">Product Name</label>
                    <input
                      type="text"
                      {...register("productName")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="">Unit</label>
                    <select {...register("unit")} required class="form-control">
                      <option>Ltr</option>
                      <option>Kg</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="">Available Stock</label>
                    <input
                      type="number"
                      {...register("availableStock")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="">Price Per Unit</label>
                    <input
                      type="number"
                      {...register("pricePerUnit")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="">Status</label>
                    <select
                      {...register("status")}
                      required
                      className="form-control"
                    >
                      <option>Active</option>
                    </select>
                  </div>
                  {/* <div class="form-group">
                    <label for="">Available Stock</label>
                    <input type="text" class="form-control" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="text-md-right mt-3">
              <button type="submit" className="add-product-button">
                <img src={addIcon} alt="" />
                <span style={{ paddingLeft: "10px" }}>Add Product</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddProducts;
