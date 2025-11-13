import { Rows2, Upload, FileText, Image, Video } from 'lucide-react'

const Uploads = () => {
  return (
    <div className="flex gap-6 px-8 py-6 w-full justify-center mx-auto max-w-[85rem]">
      <div className="flex-1 space-y-6">
        {/* Uploads Header */}
        <section className="bg-white rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl text-gray-800">My Uploads</h1>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700">
              <Upload className="w-4 h-4" />
              Upload File
            </button>
          </div>

          {/* Upload Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">24</p>
              <p className="text-sm text-gray-600">Documents</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Image className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-sm text-gray-600">Images</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Video className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">8</p>
              <p className="text-sm text-gray-600">Videos</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Rows2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">156 MB</p>
              <p className="text-sm text-gray-600">Total Size</p>
            </div>
          </div>

          {/* Uploads List Placeholder */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((upload) => (
              <div key={upload} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Upload File {upload}</h3>
                    <p className="text-sm text-gray-500">Uploaded 3 days ago • 2.1 MB</p>
                  </div>
                </div>
                <button className="text-purple-600 hover:text-purple-800">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Uploads
