from setuptools import setup, find_packages

VERSION = '0.0.1' 
DESCRIPTION = 'Python package for simulation of granular system'
LONG_DESCRIPTION = 'Python package for simulation of granular system using molecular dynamics method and agent-based model'

# Setting up
setup(
       # the name must match the folder name 'verysimplemodule'
        name="butiran", 
        version=VERSION,
        author="Sparisoma Viridi",
        author_email="<dudung@email.com>",
        description=DESCRIPTION,
        long_description=LONG_DESCRIPTION,
        packages=find_packages(),
        install_requires=[], # add any additional packages that 
        # needs to be installed along with your package. Eg: 'caer'
        
        keywords=['python', 'first package'],
        classifiers= [
            "Development Status :: 3 - Alpha",
            "Intended Audience :: Education",
            "Programming Language :: Python :: 2",
            "Programming Language :: Python :: 3",
            "Operating System :: MacOS :: MacOS X",
            "Operating System :: Microsoft :: Windows",
        ]
)

#	
#	url https://www.freecodecamp.org/news/build-your-first-python-package/
#	20210206
#	1637 Try python setup.py sdist bdist_wheel