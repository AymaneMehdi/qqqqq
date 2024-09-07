import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGig, updateGig } from "../../services/gigApi";
import { getCategories } from "../../services/categoryApi";
import { motion } from "framer-motion"; // Import Framer Motion

const EditGig: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [gigData, setGigData] = useState({
    title: "",
    description: "",
    shortTitle: "",
    shortDesc: "",
    category: "",
  });
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  );
  const [singleFile, setSingleFile] = useState<File | undefined>(undefined);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const data = await getGig(id!);
        setGigData(data);
      } catch (error) {
        console.error("Error fetching gig:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchGig();
    fetchCategories();
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setGigData({ ...gigData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "coverImage") {
      setSingleFile(e.target.files ? e.target.files[0] : undefined);
    } else if (e.target.name === "uploadImages") {
      setFiles(Array.from(e.target.files || []));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const data = new FormData();
    data.append("title", gigData.title || "");
    data.append("description", gigData.description || "");
    data.append("shortTitle", gigData.shortTitle || "");
    data.append("shortDesc", gigData.shortDesc || "");
    data.append("category", gigData.category || "");
    if (singleFile) {
      data.append("coverImage", singleFile);
    }
    files.forEach((file) => {
      data.append("images", file);
    });

    try {
      await updateGig(id!, data);
      navigate("/my-gigs");
    } catch (error) {
      console.error("Error updating gig:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="overflow-hidden pt-20 pb-20 pl-20 pr-20 bg-gradient-to-r bg-[#ffedd5]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="px-8 py-10 -mt-20">
        <motion.h2
          className="text-5xl font-extrabold text-center text-[#39b19d]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          Edit Gig
        </motion.h2>
        <div className="mt-10 space-y-6">
          {["title", "description", "shortTitle", "shortDesc"].map(
            (field, index) => (
              <motion.div
                className="flex-1 relative mb-4"
                key={field}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-full p-5 bg-white rounded-lg font-mono border-[#39b19d] border-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={field}
                  >
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                  </label>
                  {field.includes("Desc") ? (
                    <textarea
                      name={field}
                      placeholder={`Enter ${field.replace(
                        /([A-Z])/g,
                        " $1",
                      )}`}
                      onChange={handleChange}
                      value={gigData[field]}
                      className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#39b19d] hover:shadow-lg hover:border-[#39b19d] bg-gray-100 text-black"
                      rows={field.includes("shortDesc") ? 2 : 4}
                      required
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      name={field}
                      placeholder={`Enter ${field.replace(
                        /([A-Z])/g,
                        " $1",
                      )}`}
                      onChange={handleChange}
                      value={gigData[field]}
                      className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#39b19d] hover:shadow-lg hover:border-[#39b19d] bg-gray-100 text-black"
                      required
                    />
                  )}
                </div>
              </motion.div>
            ),
          )}

          <motion.div
            className="flex-1 relative mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-full p-5 bg-white rounded-lg font-mono border-[#39b19d] border-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                name="category"
                onChange={handleChange}
                value={gigData.category}
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#39b19d] hover:shadow-lg hover:border-[#39b19d] bg-gray-100 text-black"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="w-full p-5 bg-white rounded-lg font-mono border-[#39b19d] border-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="coverImage"
              >
                Cover Image
              </label>
              <input
                type="file"
                name="coverImage"
                onChange={handleFileChange}
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#39b19d] hover:shadow-lg hover:border-[#39b19d] bg-gray-100 text-black"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="w-full p-5 bg-white rounded-lg font-mono border-[#39b19d] border-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="uploadImages"
              >
                Upload Images
              </label>
              <input
                type="file"
                name="uploadImages"
                multiple
                onChange={handleFileChange}
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#39b19d] hover:shadow-lg hover:border-[#39b19d] bg-gray-100 text-black"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <button
              type="submit"
              className="w-full px-4 py-3 tracking-wide text-white transition-colors rounded-lg duration-200 transform bg-[#39b19d] text-2xl font-semibold mt-10"
              disabled={uploading}
            >
              {uploading ? "Updating..." : "Update Gig"}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.form>
  );
};

export default EditGig;
